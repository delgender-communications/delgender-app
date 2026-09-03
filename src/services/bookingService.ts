const API_BASE_URL = import.meta.env.API_BASE_URL || "https://localhost:7123";

export const MeetingType = {
  InPerson: 0,
  OnlineMeeting: 1,
  PhoneCall: 2,
} as const;

export type MeetingType = (typeof MeetingType)[keyof typeof MeetingType];

export interface CreateBookingDto {
  fullName: string;
  jobTitle?: string;
  companyName: string;
  email: string;
  industry: string;
  helpWith: string;
  problemDescription: string;
  sessionGoal: string;
  meeting: MeetingType;
  date: string;
  time: string;
  contactPermission: boolean;
}

export interface BookingDto extends CreateBookingDto {
  id: number;
}

export interface PagedResultDto<T> {
  data: T[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
  nextPage: boolean;
  hasPreviousPage: boolean;
}

export const createBooking = async (
  dto: CreateBookingDto,
): Promise<BookingDto> => {
  const response = await fetch(`${API_BASE_URL}/api/bookings/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dto),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      errorText || `Error ${response.status}: Failed to submit booking.`,
    );
  }

  return response.json();
};

export const getBookingById = async (id: number): Promise<BookingDto> => {
  const response = await fetch(`${API_BASE_URL}/api/bookings/${id}`);

  if (!response.ok) {
    throw new Error(`Error ${response.status}: Booking not found.`);
  }

  return response.json();
};

export const getAllBookings = async (
  page = 1,
  pageSize = 10,
): Promise<PagedResultDto<BookingDto>> => {
  const response = await fetch(
    `${API_BASE_URL}/api/bookings?page=${page}&pageSize=${pageSize}`,
  );

  if (!response.ok) {
    throw new Error(`Error ${response.status}: Failed to fetch bookings.`);
  }

  return response.json();
};
