package com.example.ecomm.repository;

import com.example.ecomm.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    // Öne çıkan ürünleri ID'ye göre azalan sırada getirir
    List<Product> findByFeaturedTrueOrderByIdDesc();
}