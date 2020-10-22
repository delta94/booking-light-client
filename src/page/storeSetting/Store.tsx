import React from 'react';
import { JDicon, JDcard, JDphotoFrame, JDbutton, JDtypho, JDalign, Bold, Thin, Split, JDhorizen, Flex } from "@janda-com/front";
import { IStore } from './interface';

interface IProps {
    store: IStore
}

const Store: React.FC<IProps> = ({ store }) => {
    const { name, _id, images, description, code, zoneinfo } = store;
    const img = images?.[0]?.uri || undefined;

    return <JDcard className="store">
        <Flex between center>
            <JDalign mr="huge" flex={{
                vCenter: true
            }} style={{
                width: '100%'
            }}>
                <JDphotoFrame mr="huge" isBgImg className="store__img" src={img} />
                <div style={{
                    width: '100%'
                }} >
                    <JDalign mb="normal" flex>
                        <JDtypho mb="no" mr="normal" weight={600} size="h6">
                            {name}
                        </JDtypho>
                        <JDalign flex style={{
                            alignSelf: "flex-end"
                        }}>
                            <JDicon mr="tiny" icon="location" />
                            <Thin weight={100}>
                                {zoneinfo.callingCode}
                            </Thin>
                        </JDalign>
                    </JDalign>
                    <JDalign flex={{
                        vCenter: true
                    }}>
                        <Bold mr="normal">
                            상품
                    </Bold>
                        <Thin >
                            5
                        </Thin>
                        <Split />
                        <Bold mr="normal">
                            판매
                    </Bold>
                        <Thin>
                            54건
                    </Thin>
                        <Split />
                        <Bold mr="normal">
                            생성일
                    </Bold>
                        <Thin >
                            2020-08-25
                    </Thin>
                        <Split />
                        <Bold mr="normal">
                            회원
                    </Bold>
                        <Thin >
                            42명
                    </Thin>
                    </JDalign>
                    <JDhorizen margin={2} />
                    <Thin size="small">
                        {description}
                    </Thin>
                </div>
            </JDalign>
            <div style={{
                maxWidth: "min-content"
            }}>
                <JDbutton mb="normal" br="square" mode="border">수정하기</JDbutton>
                <JDbutton br="square" mode="flat" thema="point">삭제하기</JDbutton>
            </div>
        </Flex>
    </JDcard>
}

export default Store;