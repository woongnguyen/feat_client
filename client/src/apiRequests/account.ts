
import {AccountResType} from "@/schemaValidations/account.schema";
import http from "@/lib/http";

const accountApiRequests = {
    me: (sessionToken: string) => http.get<AccountResType>('/account/me', {
        headers: {
            'Authorization': `Bearer ${sessionToken}`
        }
    }),
    meClient: () => http.get<AccountResType>('/account/me'),
}

export default accountApiRequests;