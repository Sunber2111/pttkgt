import React from "react";
import "./style.scss";
import { GridColumn, Icon, Label } from "semantic-ui-react";

const CardRK = ({ info }) => {
  return (
    <GridColumn className="p-3">
      <div className="step d-flex flex-column ">
        <div className="d-flex justify-content-center">
          <h2>{info.name}</h2>
        </div>
        <div className="d-flex flex-column justify-content-center mx-auto mt-3">
          <Icon name="arrow down" size="big" />
        </div>
        
        <h2 className="mt-3 mx-auto">{info.value}</h2>
        <div className="d-flex flex-column justify-content-center mx-auto mt-3">
          <Icon name="arrow down" size="big" className="mb-2" />
          
        </div>
        <Label color={info.isMatch ? "green" : "red"} className="mt-2 mx-auto">
            {info.isMatch ? `Nhận tại vị trí ${info.viTri}` : "Loại"}
          </Label>
      </div>
    </GridColumn>
  );
};

export default CardRK;
