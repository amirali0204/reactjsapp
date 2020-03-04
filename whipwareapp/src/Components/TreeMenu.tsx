import * as React from 'react';
import JqxTree, { ITreeProps,jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtree';
import { connect } from 'react-redux'
import { History, LocationState } from "history";
import { Dispatch } from "redux";
import { withRouter } from "react-router-dom";
interface MyComponentProps {
    history: History<LocationState>;
}
class TreeMenu extends React.Component<MyComponentProps&NotesListState&any,ITreeProps> {
    private myTree = React.createRef<JqxTree>();
    constructor(props) {
        super(props);
        this.onSelectChange = this.onSelectChange.bind(this);
    }
    public componentDidUpdate(): void {
        this.myTree.current!.expandAll();
    }
    public componentDidMount(){
        this.myTree.current!.expandAll();
    }
    public onSelectChange(event: any){
        const args =event.args;
        const item = this.myTree.current!.getItem(args.element);
        if (item.value){
            this.props.menuaction(item.value);
        }
        window.location.reload(false);
    }
    public render() {
        return (
            <JqxTree ref={this.myTree} theme={'bootstrap'} style={{border:"none !important"}} 
                source={this.props.source} checkboxes={false} onSelect={this.onSelectChange}
            />
        );
    }
}
export interface IStoreState {
    type: string
};
interface NotesListState {
    menuaction: (id) => (dispatch: Dispatch<IStoreState>) => Promise<void>;
}
let mapStateToProps =  (state) => ({
    state: state,
});
export const toggleView = id => ({
    type: 'TOGGLE_VIEW',
    id
})

const mapDispatchToProps = dispatch => ({
    menuaction: id => dispatch(toggleView(id))
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(TreeMenu));
