import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "pancake swap",
    chainId: "galileo-4",
    "createdDate": "2025-07-28T14:08:23.373Z",
    "modifiedDate": "2025-07-28T14:08:23.373Z",
    id: "andromeda",
    collections: [
        {
            exchange:"andr1w89gl48dafy4v7at2qkhju8vnh3mjqyv4khkcrjyktjdewwgtgzqfeq52w",
            cw20: "andr1w89gl48dafy4v7at2qkhju8vnh3mjqyv4khkcrjyktjdewwgtgzqfeq52w",
            name: "Pancake swap",
            type: ICollectionType.EXCHANGE,
            id: "embeddables-exchange-1",
        },
    ],
};

export default CONFIG;
