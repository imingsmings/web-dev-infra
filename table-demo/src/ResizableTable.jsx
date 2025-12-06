import React from 'react';
import { Resizable } from 'react-resizable';
import { Table } from 'antd';

import 'react-resizable/css/styles.css'

const MAX_WIDTH = 500;

const ResizableTitle = (props) => {
  const { onResize, width, resizable, ...restProps } = props;

  if (!resizable || !width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable
      width={width}
      height={0}
      handle={
        <span
          className="react-resizable-handle"
          style={{
            right: 10,
            cursor: 'col-resize'
          }}
          onClick={e => e.stopPropagation()}
        />
      }
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps} />
    </Resizable>
  );
};


const components = {
  header: {
    cell: ResizableTitle,
  },
};

class ResizableTable extends React.Component {
  state = {
    columns: [
      {
        title: '不可拖拽列',
        dataIndex: 'a',
        key: 'a',
      },
      {
        title: '可拖拽列',
        dataIndex: 'b',
        key: 'b',
        width: 200,        // 有初始宽度
        resizable: true,
      },
      {
        title: '再来一列可拖拽',
        dataIndex: 'c',
        key: 'c',
        width: 150,
        resizable: true,
      },
    ],
  };

  handleResize = index => (e, { size }) => {
   this.setState(prev => {
    const nextColumns = [...prev.columns];
    let nextWidth = size.width;

    nextWidth = Math.max(200, Math.min(MAX_WIDTH, nextWidth));

    nextColumns[index] = {
      ...nextColumns[index],
      width: nextWidth,
    };

    return { columns: nextColumns };
  });
  };

  render() {
    const { columns } = this.state;

    const cols = columns.map((col, index) => ({
      ...col,
      onHeaderCell: column => ({
        width: column.width,
        resizable: column.resizable,    
        onResize: col.resizable ? this.handleResize(index) : undefined,
      }),
    }));

    return (
      <Table
        components={components}
        columns={cols}
        dataSource={[
          {
            a: 'aaaaaa',
            b: 'bbbbbbbbcbbbbbbbbb',
            c: 'cccccccbbbbbbbbcbbbbbbbbbbbbbbbbbcbbbbbbbbbcccc'
          }
        ]}
      />
    );
  }
}

export default ResizableTable