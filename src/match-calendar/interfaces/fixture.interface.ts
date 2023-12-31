interface Fixture {
    id: number;
    referee: null | string;
    date: string;
    timestamp: number;
    periods: Period
    venue: Venue;
    status: Status;
}