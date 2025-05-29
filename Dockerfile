FROM cypress/included:14.3.3
WORKDIR /cypress-tests
COPY . .
RUN npm install || true
CMD ["npx", "cypress", "run"]