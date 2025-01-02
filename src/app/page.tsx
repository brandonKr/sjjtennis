"use client";

import React, { useState,useEffect } from 'react';
import logo from 'images/sjjang.svg';

const AccordionMenu: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => { // 클라이언트에서만 실행될 코드
      return() => {
          console.log('componentWillUnmount');
      }
     },[]);

  const toggleAccordion = (index: number) => {
      setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={styles.accordionContainer}> 
      <img src='/images/sjjang.svg' alt="메인 이미지" style={styles.image} />
        <div style={styles.accordion}>
          <div  style={styles.accordionItem}>
              <div style={styles.accordionTitle} onClick={() => toggleAccordion(0)}>
                  레슨 예약하기
              </div>
              <div style={{...styles.accordionContent, display: activeIndex === 0 ? 'block' : 'none'}}>
                  <p>{activeIndex} 내용1</p>
              </div>
          </div>
          <div  style={styles.accordionItem}>
              <div style={styles.accordionTitle} onClick={() => toggleAccordion(1)}>
                  DM 보내기
              </div>
              <div style={{...styles.accordionContent, display: activeIndex === 1 ? 'block' : 'none'}}>
                  <p>{activeIndex} 내용1</p>
              </div>
          </div>
          <div  style={styles.accordionItem}>
              <div style={styles.accordionTitle} onClick={() => toggleAccordion(2)}>
                  레슨사진
              </div>
              <div style={{...styles.accordionContent, display: activeIndex === 2 ? 'block' : 'none'}}>
                  <p>{activeIndex} 내용1</p>
              </div>
          </div>
          <div  style={styles.accordionItem}>
              <div style={styles.accordionTitle} onClick={() => toggleAccordion(3)}>
                  머할까요?
              </div>
              <div style={{...styles.accordionContent, display: activeIndex === 3 ? 'block' : 'none'}}>
                  <p>{activeIndex} 내용1</p>
              </div>
          </div>
      </div>
    </div>
  );
};

const styles = {
  accordionContainer: {
    width: '90%',
    maxWidth: '400px',
    margin: '0 auto',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
},
image: {
    width: '100%',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
},
accordion: {
      width: '90%',
      maxWidth: '400px',
      margin: '0 auto',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  accordionItem: {
      borderTop: '1px solid #e0e0e0'
  },
  accordionTitle: {
      padding: '15px',
      fontSize: '1.2em',
      cursor: 'pointer',
      backgroundColor: '#f9f9f9',
      borderBottom: '1px solid #e0e0e0'
  },
  accordionContent: {
      padding: '15px',
      display: 'none'
  }
};

export default AccordionMenu;
