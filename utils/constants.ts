export const ACTIVITY_TABS = ['Posts', 'Videos', 'Images', 'Reactions'] as const;

export const ROUTES = {
  HOME: '/',
  ACTIVITY: '/activity',
  DASHBOARD: '/dashboard',
} as const;

export const UI_COPY = {
  NO_ITEMS: (type: string) => `No ${type.toLowerCase()} to display`,
  PROFILE_VIEWS: 'Discover who\'s viewed your profile',
  CREATOR_TOOLS_INFO: 'Creator mode gives you more ways to engage with your audience by enabling access to select tools.',
  SUGGESTED_CONNECTIONS: 'People you may know',
  FROM_SCHOOL: 'From your school',
} as const;
