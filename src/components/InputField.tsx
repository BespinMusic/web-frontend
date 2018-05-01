import * as React from 'react';

import { observer } from 'mobx-react';

export interface IProps {
  onChange: (key: string, value: string) => void;
  id: string;
  name: string;
  value: string;
}

@observer
class InputField extends React.Component<IProps, any> {
  constructor(props: IProps) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  public onChange(event: React.FormEvent<HTMLInputElement>) {
    this.props.onChange(event.currentTarget.name, event.currentTarget.value);
  }

  public render() {
    const input = this.props;
    return (
      <div className="form-group">
        <label htmlFor={input.id}>{input.name}</label>
        <input
          className="form-control"
          id={input.id}
          name={input.name}
          onChange={this.onChange}
          type="text"
          value={input.value}
        />
      </div>
    );
  }
}

export default InputField;
