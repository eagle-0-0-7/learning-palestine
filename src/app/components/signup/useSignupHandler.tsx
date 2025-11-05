import { z } from "zod";
import { useState } from "react";

// ✅ Centralized validation schema (reuse on backend too)
const SignupSchema = z.object({
    firstName: z.string().min(1, "First name is required").max(100),
    email: z.email("Valid email required"),
    occupation: z.string().optional(),
    occupationOther: z.string().optional(),
    referral: z.string().optional(),
    learnInterest: z.string().optional(),
    goal: z.string().optional(),
    organization: z.string().optional(),
    city: z.string().optional(),
    learningStyle: z.string().optional(),
    updatesConsent: z.boolean().optional(),
});

type SignupFormData = z.infer<typeof SignupSchema>;

export function useSignupHandler() {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<string[]>([]);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent, formData: SignupFormData) => {
        e.preventDefault();
        setLoading(true);
        setErrors([]);
        setSuccess(false);

        try {
            // ✅ Step 1 — Validate client-side data
            const validation = SignupSchema.safeParse(formData);
            if (!validation.success) {
                setErrors(validation.error.issues.map((i) => i.message));
                return;
            }
            const res = await fetch("/api/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    first_name: validation.data.firstName.trim(),
                    email: validation.data.email.toLowerCase().trim(),
                    occupation: validation.data.occupation || null,
                    occupation_other: validation.data.occupationOther || null,
                    referral: validation.data.referral || null,
                    learn_interest: validation.data.learnInterest || null,
                    goal: validation.data.goal || null,
                    organization: validation.data.organization || null,
                    city: validation.data.city || null,
                    learning_style: validation.data.learningStyle || null,
                    updates_consent: validation.data.updatesConsent ?? false,
                    course_id: "Palestine101",
                }),
            });

            if (!res.ok) {
                const errorData = await res.json().catch(() => ({}));
                console.error("API insert error:", errorData);
                setErrors([errorData.error || "Submission failed."]);
                return false;
            }

            // ✅ Step 4 — Report success + reset form
            console.info("Signup inserted successfully");
            setSuccess(true);

            return true;
        } catch (err) {
            if (err instanceof Error) {
                console.error("Unexpected exception:", err.message);
            } else {
                console.error("Unexpected non-error:", err);
            }
            setErrors(["Something went wrong. Please refresh and try again."]);
        } finally {
            setLoading(false);
        }
    };

    return { handleSubmit, loading, errors, success };
}
