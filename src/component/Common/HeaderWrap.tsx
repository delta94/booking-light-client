import { JDnoti, JDavatar, JDicon, useDropDown, useFilesManager, JDalign, JDiconSearchInput, JDsearchInput } from '@janda-com/front';
import IconSearchInput from '@janda-com/front';
import React, { useState } from 'react';
import ProfileModal, { Tservice } from '../profile/ProfileModal';
import Header from './Header';
import { B } from '../../atom/B';


const DataMypageInfo = {
    userInfo: {
        image: "",
        name: "이서진",
        version: "JANDA Booking Light Version 이용 중"
    },
}

const service: Tservice[] = [
    {
        icon: "menu",
        title: "환경설정"
    },
    {
        icon: "menu",
        title: "고객센터"
    },
    {
        icon: "menu",
        title: "마이페이지"
    },
    {
        icon: "menu",
        title: "로그아웃"
    }
]



interface IProp { }

export const HeaderWrap: React.FC<IProp> = () => {
    const uploader = useFilesManager();
    const dropDownHook = useDropDown();
    const [search, setSearch] = useState("");

    return <Header version={"1.0.0"} products={<div>
        <JDalign style={{
            position: "relative"
        }} flex={{
            vCenter: true
        }}>
            <JDsearchInput
                mr="large"
                SearchComponent={(prop) => <div>
                    <JDiconSearchInput {...prop} />
                </div>}
                onSelectData={() => { }}
                onSearchChange={v => {
                    setSearch(v);
                }}
                enterBehavior="scroll"
                head={'DummyData'}
                dataList={[]}
                searchValue={search}
            />
            <B mr="large">
                <JDnoti iconProp={{
                    badge: "1",
                    size: "normal",
                    color: "white",
                    tooltip: "새로운 알림이 N개 있습니다.",
                }} />
            </B>
            <JDavatar hover size="normal" onClick={(e) => {
                e.stopPropagation();
                dropDownHook.open(undefined, {
                    top: '2.5rem',
                    right: 0
                })
            }} uploader={uploader} />
            <ProfileModal dropBoxHook={dropDownHook} userInfo={DataMypageInfo.userInfo} services={service} />
        </JDalign>
    </div>} />;
};


export default HeaderWrap;