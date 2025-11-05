"use client";

import React, { useEffect, useState } from "react";
import { useSignupHandler } from "./useSignupHandler";

interface SignupFormProps {
  email?: string;
}

export default function SignupForm({ email = "" }: SignupFormProps) {
  const { handleSubmit, loading, errors, success } = useSignupHandler();

  const [formData, setFormData] = useState({
    firstName: "",
    email,
    occupation: "",
    occupationOther: "",
    referral: "",
    learnInterest: "",
    goal: "",
    organization: "",
    city: "",
    learningStyle: "",
    updatesConsent: false,
  });

  useEffect(() => {
    if (email) setFormData((prev) => ({ ...prev, email }));
  }, [email]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, type, value } = e.target;
    let newValue: string | boolean = value;

    // ✅ Narrow only when it's an input of type checkbox
    if (type === "checkbox" && "checked" in e.target) {
      newValue = (e.target as HTMLInputElement).checked;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e, formData)}
      role="form"
      aria-labelledby="signupFormTitle"
      aria-describedby="signupFormDesc"
      className="space-y-6 max-w-2xl bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,43,107,0.44)]"
    >
      <h2
        id="signupFormTitle"
        className="text-3xl font-bold text-[#002B6B] mb-2"
      >
        Join Our Learning Community
      </h2>
      <p id="signupFormDesc" className="text-gray-600 mb-8">
        Sign up to share your interests and help us shape the future of our
        platform.
      </p>

      {/* First Name */}
      <div>
        <label
          htmlFor="firstName"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          First Name <span aria-hidden="true">*</span>
        </label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          aria-required="true"
          aria-describedby="firstNameHelp"
          className="mt-1 w-full text-black rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0066FF]"
        />
        <p id="firstNameHelp" className="text-xs text-gray-500">
          Enter your preferred first name.
        </p>
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Email Address <span aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          aria-required="true"
          aria-describedby="emailHelp"
          className="mt-1 w-full text-black rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0066FF]"
        />
        <p id="emailHelp" className="text-xs text-gray-500">
          We’ll never share your email without permission.
        </p>
      </div>

      {/* Occupation */}
      <div>
        <label
          htmlFor="occupation"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Occupation / Role
        </label>
        <p id="occupationHelp" className="text-xs text-gray-500">
          Example: Student, Educator, Developer
        </p>
        <select
          id="occupation"
          name="occupation"
          aria-describedby="occupationHelp"
          value={formData.occupation}
          onChange={handleChange}
          className="mt-1 w-full text-black rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0066FF]"
        >
          <option value="">Select one</option>
          <option value="Student">Student</option>
          <option value="Educator">Educator</option>
          <option value="Developer">Developer</option>
          <option value="Organizer">Community Organizer</option>
          <option value="Researcher">Researcher</option>
          <option value="Other">Other (please specify below)</option>
        </select>

        {/* Conditional “Other” text field */}
        {formData.occupation === "Other" && (
          <input
            id="occupationOther"
            type="text"
            name="occupationOther"
            value={formData.occupationOther}
            onChange={handleChange}
            placeholder="If Other, please specify"
            aria-labelledby="occupation"
            aria-describedby="occupationHelp"
            className="mt-2 w-full text-black rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0066FF]"
          />
        )}
      </div>

      {/* Referral */}
      <div>
        <label
          htmlFor="referral"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          How did you hear about us?
        </label>
        <input
          id="referral"
          type="text"
          name="referral"
          value={formData.referral}
          onChange={handleChange}
          aria-describedby="referralHelp"
          placeholder="Instagram, friend, event, etc."
          className="mt-1 w-full text-black rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0066FF]"
        />
        <p id="referralHelp" className="text-xs text-gray-500">
          This helps us understand how people discover RevEd.
        </p>
      </div>

      {/* Learning Interest */}
      <div>
        <label
          htmlFor="learnInterest"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          What would you like to learn or see on the platform?
        </label>
        <textarea
          id="learnInterest"
          name="learnInterest"
          value={formData.learnInterest}
          onChange={handleChange}
          rows={3}
          aria-describedby="learnInterestHelp"
          className="mt-1 w-full text-black rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0066FF]"
        />
        <p id="learnInterestHelp" className="text-xs text-gray-500">
          Tell us topics or courses that would interest you most.
        </p>
      </div>

      {/* Goals */}
      <div>
        <label
          htmlFor="goal"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          What do you hope to gain from this experience?
        </label>
        <textarea
          id="goal"
          name="goal"
          value={formData.goal}
          onChange={handleChange}
          rows={3}
          aria-describedby="goalHelp"
          className="mt-1 w-full text-black rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0066FF]"
        />
        <p id="goalHelp" className="text-xs text-gray-500">
          Share your learning goals to help us improve course design.
        </p>
      </div>

      {/* Organization */}
      <div>
        <label
          htmlFor="organization"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Organization / School / Company Name
        </label>
        <input
          id="organization"
          type="text"
          name="organization"
          value={formData.organization}
          onChange={handleChange}
          aria-describedby="organizationHelp"
          className="mt-1 w-full text-black rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0066FF]"
        />
        <p id="organizationHelp" className="text-xs text-gray-500">
          Optional. Include your school, company, or group if relevant.
        </p>
      </div>

      {/* City */}
      <div>
        <label
          htmlFor="city"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          City / Region
        </label>
        <input
          id="city"
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          aria-describedby="cityHelp"
          className="mt-1 w-full text-black rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0066FF]"
        />
        <p id="cityHelp" className="text-xs text-gray-500">
          Used only for understanding regional participation.
        </p>
      </div>

      {/* Learning Style */}
      <div>
        <label
          htmlFor="learningStyle"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Choose one word that describes your learning style
        </label>
        <select
          id="learningStyle"
          name="learningStyle"
          value={formData.learningStyle}
          onChange={handleChange}
          aria-describedby="learningStyleHelp"
          className="mt-1 w-full text-black rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0066FF]"
        >
          <option value="">Select one</option>
          <option value="Curious">Curious</option>
          <option value="Analytical">Analytical</option>
          <option value="Reflective">Reflective</option>
          <option value="Collaborative">Collaborative</option>
          <option value="Creative">Creative</option>
        </select>
        <p id="learningStyleHelp" className="text-xs text-gray-500">
          This helps tailor course experiences to different learning types.
        </p>
      </div>

      {/* Checkbox */}
      <div className="flex items-start">
        <input
          id="updatesConsent"
          type="checkbox"
          name="updatesConsent"
          checked={formData.updatesConsent}
          onChange={handleChange}
          aria-describedby="updatesConsentHelp"
          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        />
        <label htmlFor="updatesConsent" className="ml-2 text-sm text-gray-700">
          I’d like to receive updates about new courses and opportunities.
        </label>
      </div>
      <p id="updatesConsentHelp" className="text-xs text-gray-500">
        You can unsubscribe at any time.
      </p>

      {/* Submit */}
      <button
        type="submit"
        aria-label="Submit sign-up form"
        className="w-full bg-[#002B6B] text-white font-semibold py-3 rounded-md hover:bg-[#001F4A] transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0066FF]"
      >
        {loading ? "Submitting..." : "Sign Up"}
      </button>

      {/* Privacy Notice */}
      <p className="text-xs text-gray-500 mt-4">
        By submitting this form, you agree that GHTech Inc may contact you about
        learning opportunities.
      </p>
      {errors.length > 0 && (
        <div
          role="alert"
          className="bg-red-50 border border-red-200 text-red-700 rounded-md p-3 mb-4"
        >
          <ul className="list-disc list-inside space-y-1 text-sm">
            {errors.map((err) => <li key={err}>{err}</li>)}
          </ul>
        </div>
      )}

      {success && (
        <p role="alert" className="mt-2 text-green-600 text-sm">
          Thanks for signing up! Check your inbox soon.
        </p>
      )}
    </form>
  );
}
