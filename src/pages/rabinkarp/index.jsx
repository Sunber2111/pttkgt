import React, { useState } from "react";
import {
  Input,
  Grid,
  GridColumn,
  Form,
  TextArea,
  Icon,
  Label,
} from "semantic-ui-react";
import CardRK from "components/cardRK";
import { search } from "algorithm/core";

const Rabinkarp = () => {
  const [data, setData] = useState({
    key: "",
    input: "",
    isShow: false,
  });

  const [result, setResult] = useState({});

  const handleClick = (e) => {
    const res = search(data.input, data.key);
    console.log(res);

    setData({ ...data, isShow: true });
    setResult({ ...res });
  };

  return (
    <Grid>
      <GridColumn computer="4" mobile={16}>
        <Form>
          <TextArea
            name="input"
            value={data.input}
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            className="mb-4 mt-3 ml-2"
            style={{ minHeight: 190 }}
            fluid
            placeholder="Nhập Văn Bản..."
          />
        </Form>
        <Input
          className="ml-2"
          name="key"
          value={data.key}
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
          icon={
            <Icon
              name="search"
              color="green"
              inverted
              circular
              link
              onClick={handleClick}
            />
          }
          fluid
          placeholder="Chuỗi Cần Tìm..."
        />
      </GridColumn>
      <GridColumn computer="12" mobile={16}>
        <Grid className="content-main d-flex flex-column">
          <div className="mt-2">
            <h1>Đầu Vào : </h1>
            <h2>{data.input}</h2>
          </div>
          <div className="mt-4">
            <h1>Từ Khóa : </h1>
            <h2 className="text-primary">{data.key}</h2>
          </div>
          {data.isShow && (
            <div>
              <div className="mt-5">
                <Label color="yellow" className="my-label" basic>
                  Bước 1
                </Label>
                <div className="mt-2">
                  <h3>
                    {" "}
                    Hash(key) = Hash({data.key}) = {result.hashKey}{" "}
                  </h3>
                </div>
              </div>
              <div className="mt-3">
                <Label color="blue" className="my-label" basic>
                  Bước 2
                </Label>
                <Grid columns={7} className="mt-2">
                  {result.hashInput.map((val) => (
                    <CardRK info={val} />
                  ))}
                </Grid>
              </div>
            </div>
          )}
        </Grid>
      </GridColumn>
    </Grid>
  );
};

export default Rabinkarp;
