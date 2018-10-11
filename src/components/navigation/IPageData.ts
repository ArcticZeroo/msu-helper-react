import Icon from '@material-ui/core/Icon';

export default interface IPageData {
    appBarTitle: string;
    bottomBarTitle: string;
    bottomBarIcon: Icon;
    page: () => Element;
}