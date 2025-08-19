import { Button, Modal } from 'antd';
import { useState } from 'react';


const MidModal = () => {

    const [modal2Open, setModal2Open] = useState(false);

    return (
        <>
            <Button type="primary" onClick={() => setModal2Open(true)}>
                open modal
            </Button>
            <Modal
                title="Vertically centered modal dialog"
                centered
                open={modal2Open}
                onOk={() => setModal2Open(false)}
                onCancel={() => setModal2Open(false)}
            >
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
            </Modal>
        </>
    )
}

export default MidModal