
-- Insérer des données d'exemple dans la table projects
INSERT INTO public.projects (title, category, type, date, description, technologies, github, live, featured, media_type, media_url) VALUES

-- Projets Freelance
('Application E-commerce', 'freelance', 'Application Web', '2024', 'Développement d\'une plateforme e-commerce complète avec système de paiement intégré, gestion des stocks et tableau de bord administrateur.', ARRAY['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'], 'https://github.com/username/ecommerce-app', 'https://ecommerce-demo.com', true, 'image', 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800'),

('Site Vitrine Restaurant', 'freelance', 'Site Web', '2023', 'Création d\'un site vitrine moderne pour un restaurant avec système de réservation en ligne et carte interactive.', ARRAY['React', 'Firebase', 'CSS3', 'JavaScript'], 'https://github.com/username/restaurant-website', 'https://restaurant-demo.com', false, 'image', 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800'),

('Application Mobile Fitness', 'freelance', 'Application Mobile', '2024', 'Développement d\'une application mobile de suivi fitness avec tracking GPS, programmes d\'entraînement personnalisés.', ARRAY['React Native', 'Firebase', 'Redux', 'Google Maps API'], 'https://github.com/username/fitness-app', NULL, true, 'image', 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800'),

-- Projets de Stage (Internship)
('Système de Gestion RH', 'internship', 'Application Web', '2023', 'Développement d\'un système de gestion des ressources humaines pour une entreprise de 200+ employés avec gestion des congés et évaluations.', ARRAY['Vue.js', 'Laravel', 'MySQL', 'Bootstrap'], NULL, NULL, false, 'image', 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800'),

('Plateforme de Formation en Ligne', 'internship', 'Plateforme Web', '2023', 'Contribution au développement d\'une plateforme LMS avec vidéos interactives, quiz et suivi de progression.', ARRAY['Angular', 'Spring Boot', 'MongoDB', 'AWS'], NULL, 'https://learning-platform.com', true, 'image', 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800'),

('Dashboard Analytics', 'internship', 'Application Web', '2022', 'Création d\'un tableau de bord analytique en temps réel pour le suivi des KPIs business avec graphiques interactifs.', ARRAY['React', 'D3.js', 'Python', 'Flask', 'PostgreSQL'], NULL, NULL, false, 'image', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800'),

-- Projets Académiques
('Réseau Social Étudiant', 'academic', 'Projet Universitaire', '2022', 'Développement d\'un réseau social dédié aux étudiants avec fonctionnalités de partage de cours, forums de discussion et événements.', ARRAY['React', 'Express.js', 'MongoDB', 'Socket.io'], 'https://github.com/username/student-network', 'https://student-network-demo.com', true, 'image', 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800'),

('Intelligence Artificielle - Reconnaissance Faciale', 'academic', 'Projet de Recherche', '2023', 'Implémentation d\'un système de reconnaissance faciale utilisant des réseaux de neurones convolutionnels pour la sécurité.', ARRAY['Python', 'TensorFlow', 'OpenCV', 'NumPy'], 'https://github.com/username/face-recognition', NULL, false, 'image', 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800'),

('Jeu 2D Plateforme', 'academic', 'Projet de Jeu', '2022', 'Développement d\'un jeu de plateforme 2D avec physique réaliste, système de niveaux et sauvegarde de progression.', ARRAY['Unity', 'C#', 'Photoshop'], 'https://github.com/username/platform-game', 'https://game-demo.itch.io', false, 'image', 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800'),

('Système de Gestion Bibliothèque', 'academic', 'Base de Données', '2021', 'Conception et implémentation d\'un système complet de gestion de bibliothèque avec interface utilisateur et base de données relationnelle.', ARRAY['Java', 'MySQL', 'JavaFX', 'JDBC'], 'https://github.com/username/library-management', NULL, false, 'image', 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800'),

('Chatbot Assistant Virtuel', 'academic', 'Intelligence Artificielle', '2023', 'Développement d\'un chatbot intelligent capable de répondre aux questions fréquentes des étudiants avec traitement du langage naturel.', ARRAY['Python', 'NLTK', 'Scikit-learn', 'Flask'], 'https://github.com/username/chatbot-assistant', 'https://chatbot-demo.herokuapp.com', false, 'image', 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800'),

('Application Météo Progressive', 'academic', 'Application Web', '2022', 'PWA météorologique avec géolocalisation, prévisions détaillées et fonctionnement hors-ligne.', ARRAY['JavaScript', 'Service Workers', 'Weather API', 'CSS3'], 'https://github.com/username/weather-pwa', 'https://weather-pwa-demo.netlify.app', false, 'image', 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800');
