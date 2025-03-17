import { TSchema, Type } from "@sinclair/typebox";


// defining the type of the paginationresults
// take a props of itemsSchema (type of items), with type of Schema
export const PaginationResult = <Schema extends TSchema>(itemsSchema: Schema) => {
    return Type.Object({
        count: Type.Number({default: 0}),
        data: Type.Array(itemsSchema)
    })
}