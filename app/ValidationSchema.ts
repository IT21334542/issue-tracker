import { z } from "zod";

export const IssueCreationObj = z.object({
    title: z.string(
        {
            required_error: "Title is Much required to have"
        }
    ).min(1,"Title is Required").max(255),
    description: z.string().min(1,"Description is can not be null")
});
