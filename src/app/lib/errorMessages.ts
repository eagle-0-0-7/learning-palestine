export function getFriendlyErrorMessage(errorMessage: string): string {
  // Normalize to lowercase for flexible matching
  const msg = errorMessage.toLowerCase();

  if (msg.includes("duplicate key") && msg.includes("unique_email_per_course")) {
    return "You’ve already signed up for this course with that email.";
  }

  if (msg.includes("violates not-null constraint")) {
    return "A required field is missing. Please double-check your info.";
  }

  if (msg.includes("permission denied")) {
    return "We’re having trouble saving your signup. Please try again later.";
  }

  // Generic fallback
  return "Something went wrong. Please try again in a few moments.";
}