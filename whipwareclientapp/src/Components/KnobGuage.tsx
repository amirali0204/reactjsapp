import * as React from 'react';
import JqxBarGauge, { IBarGaugeProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbargauge';
class KnobGuage extends React.PureComponent<{}, IBarGaugeProps> {
    constructor(props: {}) {
        super(props);
        this.state = {
            values: [102, 115, 130, 137]
        };
    }
    public render() {
        return (
            <JqxBarGauge 
                // @ts-ignore
                width={'100%'} height={'100px'} max={'150'}
                colorScheme={'scheme02'} values={this.state.values} 
            />
        );
    }
}
export default KnobGuage;