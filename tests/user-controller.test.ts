/// tests/api.spec.ts
import { test, expect } from '@playwright/test';
import {StatusCodes} from "http-status-codes";
let baseURL: string = 'http://localhost:3000/users';

test.describe('User management API', () => {

    test('GET / - should return empty when no users', async ({ request }) => {
        const response = await request.get(`${baseURL}`);
        expect(response.status()).toBe(200);
        const responseBody = await response.text()
        expect(responseBody).toBe('[]');
    });

    test('GET /:id - should return a user by ID', async ({ request }) => {
        const responseCreate = await request.post(`${baseURL}`);
        const responseBody = await responseCreate.json();
        expect(responseCreate.status()).toBe(201);
        const responseGet = await request.get(`${baseURL}/${responseBody.id}`);
        expect(responseGet.status()).toBe(200);
    });

    test('GET /:id - should return 404 if user not found', async ({ request }) => {
        const responseGet =  await request.get(`${baseURL}/100`);
        expect(responseGet.status()).toBe(404);

    });

    test('POST / - should add a new user', async ({ request }) => {
        const responseCreate = await request.post(`${baseURL}`);
        const responseBody = await responseCreate.json();
        expect.soft(responseCreate.status()).toBe(201);
        expect.soft(responseBody.id).toBeDefined();

    });

    test('DELETE /:id - should delete a user by ID', async ({ request }) => {
        const responseCreate = await request.post(`${baseURL}`);
        const responseBody = await responseCreate.json();
        expect(responseCreate.status()).toBe(StatusCodes.CREATED);
        const responseDelete = await request.delete(`${baseURL}/${responseBody.id}`);
        expect(responseDelete.status()).toBe(StatusCodes.OK);

    });

    test('DELETE /:id - should return 404 if user not found', async ({ request }) => {
        const responseDelete = await request.delete(`${baseURL}/10000`);
        expect(responseDelete.status()).toBe(StatusCodes.NOT_FOUND);

    });

    test('Returns all fields by creating new user', async ({ request }) => {
        const responseCreate = await request.post(`${baseURL}`);
        const responseBody = await responseCreate.json();
        expect.soft(responseCreate.status()).toBe(StatusCodes.CREATED);
        expect.soft(responseBody.id).toBeDefined();
        expect.soft(responseBody.name).toBeDefined();
        expect.soft(responseBody.email).toBeDefined();
        expect.soft(responseBody.phone).toBeDefined();
    })

});
