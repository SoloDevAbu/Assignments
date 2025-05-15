'use client'

import ShareModal from '@/app/dashboard/share/ShareModal'
import { useRouter } from 'next/navigation'

export default function InterceptedShareModalPage() {
  const router = useRouter();

  return <ShareModal />
}
