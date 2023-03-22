import React, { useState, useLayoutEffect } from "react";
import { AiOutlineRise } from "react-icons/ai";
import { BsStar } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import styled from "styled-components";
import Button from "../../components/Button";
import FormSignup from "../../components/FormSignUp";
import TitleSection from "../../components/TitleSection";

const AboutPageImg = require('../../assets/aboutPageImg.png');
const startedSectionImg = require('../../assets/StartedSectionImg.png');
const startedSectionImgSize1024 = require('../../assets/StartedSection1024.png');

const ContaierStyled = styled.div`
    width: 100%;
    section {
        padding: 0 5%;
    }

    .heroPage {
        img {
            width: 100%;
        }
    }

    & main {
        .started {
            padding: 5% 10%;
          
            display: grid;
            grid-template: 1fr / 1fr 1fr;
            align-items: center;
            gap: 110px;
          
            .startedInf {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
          
              img {
                width: 100%;
              }
            }
          
            .startedContents {
              height: 100%;
              display: grid;
              grid-template: 1fr 1fr / 1fr;
              justify-content: space-between;
          
              h3 {
                margin: 20px 0;
                color: var(--green);
              }
          
              p {
                font-weight: 400;
                font-size: 20px;
                line-height: 48px;
              }
            }
          
            @media only screen and (max-width: 1024px) {
              padding: 5% 0;
              gap: 0;
          
              display: flex;
              flex-direction: column;
          
              .startedInf {
                text-align: center;
              }
          
              .startedContents {
                height: auto;
              }
            }
        }

        .CompanySection {
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: 30px;
            align-items: center;
        
            .companyItems {
                display: grid;
                grid-template: 1fr / 1fr 1fr 1fr;
                gap: 20px;
        
                padding: 20px;
        
                @media only screen and (max-width: 1024px) {
                    grid-template: 1fr 1fr 1fr / 1fr;
        
                    padding: 0;
                }

                .whyUsItem {
                    display: flex;
                    flex-direction: column;
                    gap: 30px;
                    justify-content: center;
                    align-items: center;
                
                    .icon {
                        background-color: var(--gray);
                
                        padding: 15px;
                        border-radius: 50%;
                
                        @extend %flex-contenCenter-itemCenter;
                
                        svg {
                            font-size: 32px;
                        }
                    }
                
                }
            }
        }
    }

    @media only screen and (max-width: 1024px) {
        section {
            padding: 3%;
        }
    }
`

function AboutPage() {
    const [size, setSize] = useState(0);

    useLayoutEffect(() => {
        function updateSize() {
        setSize(window.innerWidth);
        }
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);
    
  return (
    <ContaierStyled>
      <section className='heroPage'>
        <TitleSection title="All About Us" subTitle="Learn More" />
        <img src={AboutPageImg} alt="about page" />
      </section>

      <main>
        <section className="started">
            <div className="startedInf">
                <TitleSection
                    title="How and When it has All Started"
                    subTitle="How it has Started"
                />
                {size <= 1024 ? <img src={startedSectionImgSize1024} alt="StartedSectionImg" /> : <img src={startedSectionImg} alt="StartedSectionImg" />}
            </div>

            <div className='startedContents'>
                <div>
                    <h3>Natural Ingredients Only</h3>
                    <p>10 years ago, when one of the co-founders came up with the idea of making skincare and beauty products using only natural ingredients, he did not even think twice.</p>
                </div>

                <div className='StartedContent'>
                    <h3>Natural Ingredients Only</h3>
                    <p>10 years ago, when one of the co-founders came up with the idea of making skincare and beauty products using only natural ingredients, he did not even think twice.</p>
                </div>
            </div>
        </section>
        <section className="CompanySection">
            <TitleSection title="Our Core Values" subTitle="Company Values" />
            <div className="companyItems">
                <div className='whyUsItem'>
                    <div className="icon"><AiOutlineRise /></div>
                    <h3>Great Innovation</h3>
                    <p>We are always focusingon making all our products as innovative as possible.</p>
                </div>

                <div className='whyUsItem'>
                    <div className="icon"><BsStar /></div>
                    <h3>High Quality</h3>
                    <p>One of our main values is the quality of the products that we sell to the customers.</p>
                </div>

                <div className='whyUsItem'>
                    <div className="icon"><FiUser /></div>
                    <h3>Teamwork Matters</h3>
                    <p>We believe that being a successful company is all about being a team.</p>
                </div>
            </div>

            <Button type="medium" content="View Jobs" />
        </section>
        <FormSignup />
      </main>
    </ContaierStyled>
  );
}

export default AboutPage;
