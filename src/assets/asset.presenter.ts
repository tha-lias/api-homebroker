/* eslint-disable prettier/prettier */
import { Asset } from "./entities/asset.entity";

/* eslint-disable prettier/prettier */
export class AssetPresenter {
    constructor(private asset: Asset) { }

    
    toJSON() {
        return {
            _id: this.asset._id,
            name: this.asset.name,
            symbol: this.asset.symbol,
            price: this.asset.price,
            image: `http://localhost:9000/${this.asset.image}`,
        }
    }
}