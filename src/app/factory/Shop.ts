import { Link } from "./Link";

export class Shop implements Link {
    public getLink(): string {
        return "/manages/product/list/all";
    }
}