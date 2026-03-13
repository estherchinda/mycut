export type MediaType = "image" | "video";

export type DealStatus =
  | "DRAFT"
  | "ROLE PENDING"
  | "NEGOTIATING"
  | "LOCKED"
  | "AWAITING FUNDS"
  | "FUNDER"
  | "CONFIRMATION_PENDING"
  | "EXECUTED"
  | "DISPUTED";

export type ConfirmationStatus = "confirmed" | "pending";

export interface MediaItem {
  id: string;
  type: MediaType;
  url: string; // use Unsplash URLs from Part 5
  thumbnail: string; // same URL is fine for images; poster frame for video
  alt: string;
}
export interface Participant {
  id: string;
  name: string;
  role: string;
  roleType: string; // e.g. 'Creator · Organizer';
  percentage: number; // e.g. 62.5
  amount: number; // raw number in kobo or naira — your choice, be consistent
  avatarInitials: string;
  avatarColor: string; // hex
  confirmationStatus: ConfirmationStatus;
  isCurrentUser: boolean;
  isPlatformFee?: boolean;
}

export interface LifecycleEvent {
  id: string;
  label: string;
  date: string;
  subtitle: string;
  state: "completed" | "active" | "pending";
}

export interface Deal {
  id: string;
  dealNumber: string;
  title: string;
  category: string;
  status: DealStatus;
  location: string;
  totalValue: number;
  yourCut: number;
  yourCutPercentage: number;
  platformFee: number;
  platformFeeLabel: string;
  media: MediaItem[];
  participants: Participant[];
  lifecycle: LifecycleEvent[];
  confirmations: { received: number; required: number };
  autoDistributionNote: string;
}
