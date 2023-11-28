import { Avatar, Space, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import * as S from "./FollowList.styled"
import { useDispatch } from 'react-redux';
import { following, unFollowing } from '../../redux/slices/userSlice';

export const FollowList = ({ id, name, group, follow }) => {
    const dispatch = useDispatch();

    const handleFollow = () => {
        if (follow) {
            dispatch(unFollowing(id));
        } else {
            dispatch(following(id));
        }
    };

    return (
        <S.Container>
            <S.FollowContainer>
                <Avatar size={40} icon={<UserOutlined />} />
                <S.TextContainer>
                    <S.Name>{name}</S.Name>
                    <S.Group>{group}</S.Group>
                </S.TextContainer>
            </S.FollowContainer>

            <Button onClick={handleFollow}>{follow ? "언팔로우" : "팔로우"}</Button>
        </S.Container>
    );
}