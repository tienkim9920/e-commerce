import { JwtHelperService } from "@auth0/angular-jwt";
import { KhachHang } from "./KhachHang";
import { Link } from "./Link";
import { Shop } from "./Shop";

export class Factory {
    public RedirectLogin(jwt: any):Link {
       
        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(jwt);
        console.log(decodedToken.user.authId.auth)
        if (decodedToken.user.authId.auth === "shop") {
            return new Shop();

        } else if (decodedToken.user.authId.auth === "client") {
            return new KhachHang();
        }
        return new KhachHang();
    }
}
