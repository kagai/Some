import { ChuckNorisService } from '../helpers/helper';

const chuckNorisService = new ChuckNorisService();

export default {
    Query: {
        catagories: () => chuckNorisService.getCatagories(),
        category(parent: any, args: any, context: any, info: any) {
            return chuckNorisService.getCategory(args.catagory)
        }
    },
}