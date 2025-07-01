<<<<<<< HEAD
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ include file="../includes/header.jsp" %>

<div class="container">
  <h2>문의하기</h2>
  <form role="form" action="/board/register" method="post">

    <table class="table table-bordered">


      <tr>
        <th>제목</th>
        <td><input type="text" name="title" style="width: 100%;"></td>
      </tr>
      <tr>
        <th>작성자</th>
        <td>
          <input type="text" name="writer" style="width: 100%;">
        </td>
      </tr>
      <tr>
        <th>내용</th>
        <td colspan="5">
          <textarea name="content" class="form-control" rows="10"></textarea>
        </td>
      </tr>
    </table>

    <button data-oper='register' class="btn btn-info">등록</button>
    <button data-oper='list' class="btn btn-default">목록</button>

  </form>
</div>
=======
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ include file="../includes/header.jsp" %>

<h2>새 글 작성</h2>
<form action="register.do" method="post" enctype="multipart/form-data" class="board">
  <p>제목: <input type="text" name="title" required /></p>
  <p>작성자: <input type="text" name="writer" required /></p>
  <p>내용: <textarea name="content" required></textarea></p>
  <p>이미지 업로드: <input type="file" name="uploadFile" /></p>
  <input type="submit" value="등록" />
</form>
<a href="list.do">목록으로</a>
>>>>>>> 2b53f6525f0bf16378ac3627abcc135ed29f73cb

<%@ include file="../includes/footer.jsp" %>