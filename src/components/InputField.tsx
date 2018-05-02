import * as React from 'react';

import { observer } from 'mobx-react';

import { FormGroup } from '@blueprintjs/core';

export interface IProps {
  onChange: (key: string, value: string) => void;
  id: string;
  name: string;
  value: string;
  label: string;
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
      <FormGroup label={input.label} labelFor={input.id}>
        <input
          className="form-control pt-input"
          id={input.id}
          name={input.name}
          onChange={this.onChange}
          type="text"
          value={input.value}
        />
      </FormGroup>
    );
  }
}

export default InputField;
