import {useRouter} from "next/router";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Image from "next/image";

const Category = () => {

    // vars
    const router = useRouter();
    const category = router?.query?.category || 'general';

    // states
    const [articles, setArticles] = useState([]);

    const getCategoryHeadLines = useCallback(async () => {
        const data = await axios.get("https://saurav.tech/NewsAPI/top-headlines/category/" + category + "/in.json")
        setArticles(data?.data?.articles || []);
    }, [category]);

    useEffect(() => {
        getCategoryHeadLines().then((() => true));
    }, [getCategoryHeadLines])

    return (
        <div className="headlines">
            <Container>
                <Row>
                    {articles?.map(article => <Col md={4} key={article.url}>
                            <a target="_blank" href={article?.url}>
                                <img src={article?.urlToImage} className="banner"/>
                                <h2 className="title">{article?.title}</h2>
                            </a>
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    )
}

export default Category
