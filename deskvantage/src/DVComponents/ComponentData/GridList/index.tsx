import * as OrderCol from "./OrderList"
import * as ProjectCol from "./ProjectList"
import * as StaffCol from "./StaffList"
export const dvGridColumns = {
    Orders: OrderCol.columns,
    Projects: ProjectCol.columns,
    Staff: StaffCol.columns
}
export const dvGridDataFields = {
    Orders: OrderCol.datafields,
    Projects: ProjectCol.datafields,    
    Staff: StaffCol.datafields
}