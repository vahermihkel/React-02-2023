import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function AdminHome() {
  // t - tõlkimine, i18n - keelevahetuse
  //    [] - peab olema täpselt nii palju   {} - meie valik kui palju
  const { t } = useTranslation();

  return (
    <div>
      <Button as={Link} to="/admin/maintain-shops" variant="primary">{t("maintain-shops")}</Button>{' '}
      <Button as={Link} to="/admin/maintain-categories"  variant="secondary">{t("maintain-categories")}</Button>{' '}
      <Button as={Link} to="/admin/add-product"  variant="success">{t("add-product")}</Button>{' '}
      <Button as={Link} to="/admin/maintain-products"  variant="warning">{t("maintain-products")}</Button>{' '}
    </div>
  )
}

export default AdminHome