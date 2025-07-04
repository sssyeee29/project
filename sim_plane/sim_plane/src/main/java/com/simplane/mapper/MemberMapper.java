package com.simplane.mapper;

import com.simplane.domain.AuthVO;
import com.simplane.domain.MemberVO;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface MemberMapper {

    MemberVO readByUserid(@Param("userid") String userid);

    int insert(MemberVO member);

    int insertAuth(AuthVO auth);


    List<AuthVO> readAuthByMemberid(int memberid);
}