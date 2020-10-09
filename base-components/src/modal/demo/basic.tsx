import * as React from 'react'
import { Button, Modal, Icon } from '@alicloudfe/components';
const Demo = () => {
  const [visible, onVisibleChange] = React.useState(false);
  const onClose = () => { onVisibleChange(false); };
  const onOpen = () => { onVisibleChange(true); };
  return (
    <div>
      <Button onClick={onOpen}>打开Modal</Button>
      <Modal
        title="标题"
        description="描述区域"
        visible={visible}
        onClose={onClose}
        operations={
          <>
            <Button type="secondary"><Icon type="paper-pen" />编辑</Button>
            <Button type="secondary"><Icon type="save" />保存</Button>
          </>
        }
      >
        <div className="custom-content" />
      </Modal>
    </div>
  );
}

export default Demo;
