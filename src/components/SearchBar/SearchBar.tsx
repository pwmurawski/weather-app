/* eslint-disable no-unused-vars */
import { ChangeEventHandler, useRef } from "react";
import { Container, Icon, Input } from "./styles/SearchBarStyles";
import searchIcon from "../../assets/search.png";

interface ISearchBarProps {
  value?: string | number | readonly string[];
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const defaultProps = {
  value: undefined,
  onChange: undefined,
};

export default function SearchBar({ value, onChange }: ISearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Container onClick={() => inputRef.current?.focus()}>
      <Input
        ref={inputRef}
        placeholder="Wyszukaj"
        value={value}
        onChange={onChange}
      />
      <Icon src={searchIcon} alt="Search" />
    </Container>
  );
}

SearchBar.defaultProps = defaultProps;
