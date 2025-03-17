import { Type } from "@sinclair/typebox";

export const NotFound = Type.Object({
    statusCode: Type.Number({default: 404}),
    error: Type.String(),
    message: Type.String()
})
