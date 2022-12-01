const countdownSchema = {
    title: "CountDown Offer Day",
    description: "Countdown component to show offers of the day",
    type: "object",
    properties: {
        targetDate: {
            title: "Final Date Of The Offer",
            type: "string",
            default: null,
            widget: {
                "ui:widget": "date-time"
            }
        }
    }
}

export default countdownSchema;