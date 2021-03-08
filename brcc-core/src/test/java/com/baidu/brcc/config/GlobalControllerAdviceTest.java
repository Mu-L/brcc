/*
 * Copyright (c) Baidu Inc. All rights reserved.
 *
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.baidu.brcc.config;

import static com.baidu.brcc.common.ErrorStatusMsg.SERVER_ERROR_STATUS;

import org.junit.Assert;
import org.junit.Test;

import com.baidu.brcc.domain.base.R;
import com.baidu.brcc.domain.exception.BizException;

public class GlobalControllerAdviceTest {
    GlobalControllerAdvice globalControllerAdvice = new GlobalControllerAdvice();

    @Test
    public void testExHandler() throws Exception {
        R result = globalControllerAdvice.bizExceptionHandler(new BizException(500, "message"));
        Assert.assertEquals(500, result.getStatus());
        Assert.assertEquals("message", result.getMsg());
    }

    @Test
    public void testExceptionHandler() {
        R r = globalControllerAdvice.exceptionHandler(new Exception());
        Assert.assertEquals(SERVER_ERROR_STATUS.intValue(), r.getStatus());
    }
}
