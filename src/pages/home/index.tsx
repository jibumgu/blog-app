import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <header>
                <div>
                    <Link to="/posts/new">글쓰기</Link>
                    <Link to="/posts/new">게시글</Link>
                    <Link to="/profile">프로필</Link>
                </div>
            </header>
            <div className="post__navigation">
                <div className="post__navigation--active">전체</div>
                <div>나의 글</div>
            </div>
            <div className="post__list">
                {[...Array(10)].map((e, index) => (
                    <div key={index} className="post__box">
                        <Link to={`/posts/${index}`}>
                        <div className="post__profile-box">
                            <div className="post__profile" />
                            <div className="post__author-name">author</div>
                            <div className="post__date">2024.10.30 수요일</div>
                        </div>
                            <div className="post__title">게시글 {index}</div>
                            <div className="post__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Integer non nulla rhoncus tortor elementum pretium a at 
                                enim. Integer tellus dolor, iaculis vitae mi nec, egestas 
                                dignissim nulla. Nunc eu ipsum blandit, bibendum leo non, 
                                feugiat justo. Vivamus a eros ac mauris aliquet lobortis 
                                ut a odio. Aenean aliquet egestas maximus. Praesent aliquet
                                risus ut enim venenatis, vitae dictum metus finibus. 
                                Suspendisse at varius nibh, eget ultricies mi. Quisque
                                viverra imperdiet interdum. Proin eu vulputate ex, semper
                                commodo ligula. Pellentesque justo odio, varius id accumsan 
                                eget, blandit sit amet enim. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                            </div>
                            <div className="post__utils-box">
                                <div className="post__delete">삭제</div>
                                <div className="post__edit">수정</div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <footer>
                <Link to="/posts/new">글쓰기</Link>
                <Link to="/posts/new">게시글</Link>
                <Link to="/profile">프로필</Link>
            </footer>
        </div>
    );
}