import { Button } from "@chakra-ui/react";
import React, { FC } from "react";
import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";
import { TbPointFilled } from "react-icons/tb";

interface ITableHeadBtnProps {
  children: React.ReactNode;
  onBtnFilterClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  value: string;
  direction: string;
  name: string;
}

const TableHeadBtn: FC<ITableHeadBtnProps> = ({
  children,
  onBtnFilterClick,
  value,
  direction,
  name,
}) => {
  return (
    <Button
      p={0}
      onClick={onBtnFilterClick}
      justifyContent={"start"}
      name={name}
      w={"100%"}
      rightIcon={
        value === name && direction === "desc" ? (
          <ArrowUpIcon />
        ) : value === name && direction === "asc" ? (
          <ArrowDownIcon />
        ) : (
          <TbPointFilled size={"10px"} />
        )
      }
      colorScheme="black"
      variant="ghost"
    >
      {children}
    </Button>
  );
};

export default TableHeadBtn;
