
export interface Slot{
    time: number;
    totalSlot: number;
    bookedSlot: number;
    availableSlot:number
}

export interface Availability{
    date: string;
    month: number;
    slots:Slot[]
}

export const availability: Availability[] = [
{
    date: "13-05-2023",
    month: 4,
    slots: [
      { time: 9, totalSlot: 100, bookedSlot: 50, availableSlot: 50 },
      { time: 10, totalSlot: 100, bookedSlot: 70, availableSlot: 30 },
      { time: 11, totalSlot: 100, bookedSlot: 20, availableSlot: 57 },
      { time: 12, totalSlot: 100, bookedSlot: 100, availableSlot: 0 },
      { time: 13, totalSlot: 100, bookedSlot: 60, availableSlot: 36 },
    ],
  },
  {
    date: "14-05-2023",
    month: 4,
    slots: [
      { time: 9, totalSlot: 100, bookedSlot: 50, availableSlot: 50 },
      { time: 10, totalSlot: 100, bookedSlot: 70, availableSlot: 30 },
      { time: 11, totalSlot: 100, bookedSlot: 20, availableSlot: 63 },
      { time: 12, totalSlot: 100, bookedSlot: 100, availableSlot: 0 },
      { time: 13, totalSlot: 100, bookedSlot: 60, availableSlot: 37 },
    ],
  },
  {
    date: "18-05-2023",
    month: 4,
    slots: [
      { time: 9, totalSlot: 100, bookedSlot: 4, availableSlot: 2 },
      { time: 10, totalSlot: 100, bookedSlot: 70, availableSlot: 0 },
      { time: 11, totalSlot: 100, bookedSlot: 20, availableSlot: 0 },
      { time: 12, totalSlot: 100, bookedSlot: 100, availableSlot: 0 },
      { time: 13, totalSlot: 100, bookedSlot: 60, availableSlot: 0 },
    ],
  },
  {
    date: "20-05-2023",
    month: 4,
    slots: [
      { time: 9, totalSlot: 100, bookedSlot: 50, availableSlot: 5 },
      { time: 10, totalSlot: 100, bookedSlot: 70, availableSlot: 0 },
      { time: 11, totalSlot: 100, bookedSlot: 20, availableSlot: 0 },
      { time: 12, totalSlot: 100, bookedSlot: 100, availableSlot: 0 },
      { time: 13, totalSlot: 100, bookedSlot: 60, availableSlot: 0 },
    ],
  },
  {
    date: "01-06-2023",
    month: 5,
    slots: [
      { time: 9, totalSlot: 100, bookedSlot: 50, availableSlot: 50 },
      { time: 10, totalSlot: 100, bookedSlot: 70, availableSlot: 30 },
      { time: 11, totalSlot: 100, bookedSlot: 20, availableSlot: 80 },
      { time: 12, totalSlot: 100, bookedSlot: 100, availableSlot: 0 },
      { time: 13, totalSlot: 100, bookedSlot: 60, availableSlot: 40 },
    ],
  },
]