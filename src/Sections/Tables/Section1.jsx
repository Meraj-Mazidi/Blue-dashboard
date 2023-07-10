import { Tag, Form, Input, Popconfirm, Table, notification } from "antd";
import React, { useContext, useEffect, useRef, useState } from "react";
const EditableContext = React.createContext(null);
const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};
const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);
  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };
  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({
        ...record,
        ...values,
      });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };
  let childNode = children;
  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }
  return <td {...restProps}>{childNode}</td>;
};

notification.config({
  placement: "bottomRight",
  bottom: 50,
  duration: 3,
  rtl: true,
});

const Section1 = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.info({
      message: `New Customer added!`,
      description: `Now please fill and fix the other data boxes to test this nice table. Thank you for your cooperation!`,
      placement,
    });
  };
  const openNotificationDelete = (placement) => {
    api.info({
      message: `Customer Deleted!`,
      description: `Thank you for your cooperation!`,
      placement,
    });
  };

  const [dataSource, setDataSource] = useState([
    {
      key: "0",
      name: "Meraj Mazidi - Edit ME!",
      age: "25",
      address: "Planet Earth, Milky Galaxy!",
      tags: ["nice", "developer", "Fun", "Creative"],
    },
    {
      key: "1",
      name: "Minerva Hooper",
      age: "32",
      address: "London, England",
      tags: ["Active", "Sales Manager"],
    },
    {
      key: "2",
      name: "Sage Rodriguez",
      age: "40",
      address: "New York, USA",
      tags: ["Remote", "Energetic", "Sales"],
    },
    {
      key: "3",
      name: "Philip Chaney",
      age: "39",
      address: "Los Angeles, CA, USA",
      tags: ["Professional", "HR manager"],
    },
    {
      key: "4",
      name: "Doris Greene",
      age: "22",
      address: "New Zeland",
      tags: ["Car dealer"],
    },
    {
      key: "5",
      name: "Mason Porter",
      age: "35",
      address: "Germany",
      tags: ["Nature", "Yoga instructor"],
    },
    {
      key: "6",
      name: "Jon Porter",
      age: "24",
      address: "France",
      tags: ["Art", "artist", "Collector"],
    },
    {
      key: "7",
      name: "Dakota Rice",
      age: "46",
      address: "Toranto, Canada",
      tags: ["Tech guy", "tech provider"],
    },
  ]);
  const [count, setCount] = useState(2);
  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
    openNotificationDelete("bottomLeft");
  };
  const defaultColumns = [
    {
      title: "name",
      dataIndex: "name",
      width: "30%",
      editable: true,
    },
    {
      title: "age",
      dataIndex: "age",
      editable: true,
    },
    {
      title: "address",
      dataIndex: "address",
      editable: true,
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      editable: true,
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.key)}
          >
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];
  const handleAdd = () => {
    const newData = {
      key: count,
      name: `New Customer ${count}`,
      age: "32",
      address: `London, Park Lane no. ${count}`,
      tags: ["New Customer", "Buyer", "Fresh"],
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };
  const handleSave = (row) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
  };
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });

  return (
    <>
      {contextHolder}
      <div className="w-full rounded-md bg-[#27293d] mb-5 shadow-md dark:shadow-lg p-4">
        <div className="flex flex-col md:flex-row gap-y-3 md:items-center justify-between">
          <div className="flex flex-col">
            <p className="text-xs font-light text-[#9a9a9a] pop">
              Customer Information
            </p>
            <p className="text-[30px] !font-[100] text-white pop">
              New Customer Data
            </p>
          </div>

          <button
            className="px-6 border border-[#1d8cf8] py-2 rounded-md text-base activeBtn text-white"
            // onClick={handleAdd}
            onClick={() => {
              openNotification("bottomRight");
              handleAdd();
            }}
          >
            Add New Customer
          </button>
        </div>

        {/* Content - Table */}
        <div className="mt-5 w-full overflow-x-scroll lg:overflow-x-hidden">
          <Table
            components={components}
            rowClassName={() => "editable-row"}
            dataSource={dataSource}
            columns={columns}
          />
        </div>
      </div>
    </>
  );
};

export default Section1;
