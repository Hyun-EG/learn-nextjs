export default function SignUp() {
  return (
    <div>
      <h4>회원가입</h4>
      <form method="POST" action="/api/post/member">
        <input placeholder="이름을 입력해주세요." name="name" />
        <input placeholder="아이디를 입력해주세요." name="id" />
        <input
          placeholder="비밀번호를 입력해주세요"
          type="password"
          name="password"
        />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}
