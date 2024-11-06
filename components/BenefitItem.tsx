'use client';
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import styles from './BenefitItem.module.css';

interface BenefitItemProps {
  number: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}

const BenefitItem: React.FC<BenefitItemProps> = ({
  number,
  title,
  description,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.benefitItem}>
      <button
        className={styles.benefitHeader}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.benefitTitle}>
          <h1 className={styles.benefitNumber}>{number}</h1>
          <h2 className={styles.benefitHeading}>{title}</h2>
        </div>
        {isOpen ? (
          <Minus className={styles.benefitIcon} />
        ) : (
          <Plus className={styles.benefitIcon} />
        )}
      </button>
      <div className={`${styles.benefitContent} ${isOpen ? styles.open : ''}`}>
        <ol className={styles.benefitDescription}>
          <li>{description}</li>
          {children}
        </ol>
      </div>
    </div>
  );
};

export default BenefitItem;
