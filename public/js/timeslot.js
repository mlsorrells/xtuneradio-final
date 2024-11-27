class Timeslot {

    constructor(ID, slot, DJ)
    {
        this.ID = ID;
        this.slot = slot;
        this.DJ = DJ;
    }

}

let timeslot = {
    slot: "10AM - 12PM",
    DJ: "Bob Evans"
};

const timeslots = [
    new Timeslot(1, "8AM - 10AM", "N/A"),
    new Timeslot(2, "10AM - 12PM", "N/A"),
    new Timeslot(3, "12PM - 2PM", "N/A"),
    new Timeslot(4, "2PM - 4PM", "N/A"),
    new Timeslot(5, "4PM - 6PM", "N/A"),
    new Timeslot(6, "6PM - 8PM", "N/A"),
    new Timeslot(7, "8PM - 10PM", "N/A")
];

console.log(timeslot.DJ);
timeslot.DJ = "Taylor Swift";
console.log(timeslot.DJ);
timeslot.programName = "Warmup Hits";
console.log(timeslot.programName);

const getTimeslots = () => timeslots;

export { Timeslot, getTimeslots };