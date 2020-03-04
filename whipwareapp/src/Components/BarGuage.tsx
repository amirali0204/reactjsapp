import * as React from 'react';
import JqxBarGauge, { IBarGaugeProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbargauge';
class BarGauge extends React.PureComponent<{}, IBarGaugeProps> {
    constructor(props: {}) {
        super(props);
        this.state = {
            tooltip: {                
                    formatFunction: (value: string): string => {
                        return ('Year: 2016<br/>Price Index:' + value);
                    },
                    visible: true  
                
            },
            values: [60]
        };
    }
    public render() {
        return (
            <JqxBarGauge 
                // @ts-ignore
                width={'100%'} height={'99%'} max={100}
                colorScheme={'scheme10'} values={this.state.values} tooltip={this.state.tooltip}
            />
        );
    }
}
export default BarGauge;