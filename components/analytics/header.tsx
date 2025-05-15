import { PageHeader } from "@/components/ui/page-header";
import { Icons } from "@/utils/icons";
import { formatDate } from "@/utils/helpers";
import Avatar from "@/components/ui/avatar";
import profileImage from '@/public/profile.jpg';

export const AnalyticsHeader = () => {
  return (
    <PageHeader
      title="Analytics & Tools"
      subtitle={formatDate(new Date(), 'full')}
      icon={Icons.ACTIVITY}
      action={
        <Avatar
          src={profileImage.src}
          alt="Profile"
          size="md"
          className="border-2 border-white shadow-sm"
        />
      }
    />
  );
}