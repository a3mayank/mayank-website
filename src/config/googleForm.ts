/**
 * Google Form Integration Configuration
 * 
 * To link your Google Form:
 * 1. Create a Google Form with fields: Name, Email, Project Type, Scope/Timeline.
 * 2. Click the 3 dots in the top-right of your Google Form -> "Get pre-filled link".
 * 3. Fill in dummy test values ("Name", "Email", "Project Type", "Message"), click "Get Link", and copy it.
 * 4. Paste your form URL below, changing `/viewform` or `/prefill` to `/formResponse`.
 * 5. Update the entry IDs (e.g. entry.123456789) below to match the query params from your pre-filled link.
 */

export interface GoogleFormConfig {
  actionUrl: string;
  entries: {
    name: string;
    email: string;
    projectType: string;
    message: string;
  };
}

export const GOOGLE_FORM_CONFIG: GoogleFormConfig = {
  // Connected to user's "Client Lead Query" Google Form:
  actionUrl:
    (import.meta.env.VITE_GOOGLE_FORM_URL as string) ||
    'https://docs.google.com/forms/d/e/1FAIpQLSdqJhT_emWR8l_U-_hXUPtIDq3zVDRs7Kgmy8HAgWUq2MuClw/formResponse',
  entries: {
    name: (import.meta.env.VITE_GOOGLE_FORM_ENTRY_NAME as string) || 'entry.397200275',
    email: (import.meta.env.VITE_GOOGLE_FORM_ENTRY_EMAIL as string) || 'entry.1759989842',
    projectType: (import.meta.env.VITE_GOOGLE_FORM_ENTRY_PROJECT_TYPE as string) || 'entry.1872628605',
    message: (import.meta.env.VITE_GOOGLE_FORM_ENTRY_MESSAGE as string) || 'entry.1272734912',
  },
};

